// @ts-nocheck -- skip type checking
import * as docs_1 from "../content/docs/test.mdx?collection=docs&hash=1747474856795"
import * as docs_0 from "../content/docs/intro.mdx?collection=docs&hash=1747474856795"
import * as games_1 from "../content/games/test.mdx?collection=games&hash=1747474856795"
import * as games_0 from "../content/games/intro.mdx?collection=games&hash=1747474856795"
import { _runtime } from "fumadocs-mdx"
import * as _source from "../source.config"
export const docs = _runtime.docs<typeof _source.docs>([{ info: {"path":"intro.mdx","absolutePath":"D:/STL/real-bloggen-seo-starter/bloggen-seo-starter/content/docs/intro.mdx"}, data: docs_0 }, { info: {"path":"test.mdx","absolutePath":"D:/STL/real-bloggen-seo-starter/bloggen-seo-starter/content/docs/test.mdx"}, data: docs_1 }], [])
export const games = _runtime.doc<typeof _source.games>([{ info: {"path":"intro.mdx","absolutePath":"D:/STL/real-bloggen-seo-starter/bloggen-seo-starter/content/games/intro.mdx"}, data: games_0 }, { info: {"path":"test.mdx","absolutePath":"D:/STL/real-bloggen-seo-starter/bloggen-seo-starter/content/games/test.mdx"}, data: games_1 }]);