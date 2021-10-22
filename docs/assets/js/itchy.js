function linkGameButton() {
    Itch.attachBuyButton(document.getElementById("itch_download"), {
        user: "marquiskurt",
        game: "unscripted",
    });
}

const _setupItch = () => {
    let parser = new RSSParser();

    return {
        feed: [],
        sources: [
            "https://marquiskurt.itch.io/unscripted/devlog.rss"
        ],

        get (source) {
            parser.parseURL(source, (err, feed) => {
                if (err) console.error(err);
                feed.items.forEach(entry => this.addToFeed(entry));
            });
        },

        addToFeed(item) {
            if (this.feed.length >= 3) return;
            this.feed.push({
                author: item.author,
                title: item.title,
                link: item.link,
                date: new Date(item.pubDate),
                excerpt: item.contentSnippet
            })
        },

        init() { 
            this.sources.forEach(source => this.get(source))
            console.log('Initialized feed.') 
        }
    }
};