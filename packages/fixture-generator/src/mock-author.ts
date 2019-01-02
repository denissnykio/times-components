import { Author, AuthorArticles, Article } from "./types";
import MockMarkup from "./mock-markup";
import MockArticle from "./mock-article";
 
const getAuthorArticles = (count: number) : AuthorArticles => ({
    count,
    list: new Array(count).fill(new MockArticle().get()),
});

class MockAuthor {
    author: Author;

    constructor() {
        this.author = {
            id: "1",
            articles: getAuthorArticles(0),
            biography: new MockMarkup()
                .addParagraphs(1)
                .get(),
            image: "url",
            jobTitle: "God",
            name: "fiona hamilton",
            hasLeadAssets: false,
            twitter: "twitter handle",
            slug: "fiona-hamilton"
        };
    }

    setAuthorArticles(count: number) {
        this.author.articles = getAuthorArticles(count);
        return this;
    }

    get(){
        return this.author;
    }
}

export default MockAuthor
