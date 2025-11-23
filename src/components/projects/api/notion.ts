import { Client } from "@notionhq/client";
import dotenv from "dotenv";
import { NotionAPI } from "notion-client";

dotenv.config();

const notion = new Client({
  auth: process.env.MY_NOTION_API_KEY,
});

export const getRenderPage = async (pageId: string) => {
  const notionApi = new NotionAPI();
  const response = await notionApi.getPage(pageId);
  return response;
};

const databaseId = process.env.MY_NOTION_DATABASE_ID;
if (!databaseId) throw new Error("Missing Notion database ID");

export const getList = async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
};
