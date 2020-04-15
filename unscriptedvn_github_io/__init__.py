# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at https://mozilla.org/MPL/2.0/.

from sys import argv
from subprocess import check_call
from shutil import rmtree
from os import listdir, chdir, getcwd, walk, remove, path

def nikola(src_folder="docs"):
    """Basic wrapper for Nikola-specific commands (i.e., the website).

    This is used as a Python decorator to write tasks for managing the
    Unscripted website.

    Args:
        src_folder: The directory name for the Nikola site.
    """
    def nikola_func(command):
        def func():
            if src_folder not in listdir(getcwd()):
                raise OSError
            chdir(src_folder)
            if callable(command):
                command()
            chdir("..")
        return func
    return nikola_func

@nikola(src_folder="src")
def site_dev():
    """Run a local instance of the Nikola site."""
    return check_call(["nikola", "auto", "--browser"])

@nikola(src_folder="src")
def site_post():
    """Create a new post on the Nikola site.

    This method automates the creation process by placing the
    post file in the appropriate date directory and forcing the
    Commonmark Markdown format.
    """
    return check_call(["nikola", "new_post", "-f", "commonmark", "-d"])

@nikola(src_folder="src")
def site_deploy():
    """Deploy the Nikola site to the docs directory.

    If the docs directory already exists, it will be deleted
    first to ensure that nothing goes wrong during the deploy
    procedure.
    """
    if "docs" in listdir("../"):
        print("⚠️ Docs folder already exist. Deleting...")
        rmtree("../docs/")

    return check_call(["nikola", "build"]) + check_call(["nikola", "deploy"])
