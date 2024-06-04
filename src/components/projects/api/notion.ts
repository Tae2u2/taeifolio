import { Client } from "@notionhq/client";
import dotenv from "dotenv";
import { NotionAPI } from "notion-client";

dotenv.config();

const notion = new Client({
  auth: process.env.MY_NOTION_API_KEY,
});

export const getRenderPage = async (pageId:string) => {
  const notionApi = new NotionAPI()
  const response = await notionApi.getPage(pageId)
  return response
}

  export const getList = async () => {
      const response = await notion.databases.query({
        database_id: `${process.env.MY_NOTION_DATABASE_ID}` || '',
      });
      return response.results;
  }
