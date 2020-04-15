<!-- 
.. title: Releasing the distribution tools
.. slug: releasing-the-distribution-tools
.. date: 2020-01-04 13:31:07 UTC-05:00
.. tags: tools, distribute
.. description: Today, the tools used to make the Mac versions of Unscripted possible have been released.
.. type: text
-->

Howdy!

Today, I'm releasing the tools that I have written to make Ren'Py distribution for the Mac a bit easier. This package, `renpy-distribute-tools`, is an open-source module for Python 3 and is Poetry-compatible.

## Why not `renpy/mac-notarization`?

I started developing the tools before the scripts published on the Ren'Py GitHub were uploaded. Initially, the tools were bundled in the same place where I develop Unscripted, but I've moved them elsewhere when modernizing the Unscripted project. These tools also are just a bunch of Python functions and classes, so you can integrate them more easily into your workflow.

## How to get it

You can get the tools at [https://github.com/alicerunsonfedora/renpy-distribute-tools](https://github.com/alicerunsonfedora/renpy-distribute-tools) via GitHub. You can either download the latest release, clone the source code manually, or add them as a dependency to your Poetry project if you're using [Poetry](https://python-poetry.org) to manage your VN:

```toml
[tool.poetry.dev-dependencies]
renpy-distribute-tools = { git = "https://github.com/alicerunsonfedora/renpy-distribute-tools.git", rev = "v0.2.2" }
```

## How to use it

The tools don't come with any pre-built scripts like the Mac notarization tools provided by Ren'Py, but you can call the methods in the module to simplify the process.

For instance, if you want to fix the property list for the Mac build, code sign, and notarize it:

```python
from renpy_distribute_tools import fix_plist, code_sign, upload_to_notary

author = "Joe Smith"
bundle_identifier = "com.example.my-vn"
code_sign_identity = "Developer ID Application: Joe Smith (XXXXXXXXXX)"
app_path = "VN-1.0.0-dists/VN-1.0.0-mac/VN.app"
apple_email = "example.joesmith@icloud.com"
apple_provider = "XXXXXXXXXX"

fix_plist(app_path + "/Contents/Info.plist",
          bundle_identifier,
          "© %s %s. All rights reserved." % (date.today().year, author))
code_sign(code_sign_identity,
          app_path,
          entitlements="../../entitlements.plist",
          enable_hardened_runtime=True)
try:
    upload_to_notary(app_path,
                     bundle_identifier,
                     apple_email,
                     "@keychain:AC_PASSWORD",
                     provider=apple_provider)
except CalledProcessError:
    print("\033[31;1mNotarization request failed. Aborting.\033[0m")
    sys.exit(1)
```

There's also some documentation that you can read at [https://marquiskurt.net/renpy-distribute-tools/](https://marquiskurt.net/renpy-distribute-tools/) to know what functions are available for use.