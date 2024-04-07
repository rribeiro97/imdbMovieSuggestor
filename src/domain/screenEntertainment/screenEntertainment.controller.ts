import { Response, Request } from "express";
import { screenEntertainmentReadService } from "../../factory";

export async function getTop100Movies(request: Request, response: Response) {
  try {
    const result = await screenEntertainmentReadService.getTop100Movies();

    return response.status(201).json(result);
  } catch (error: Error | unknown) {
    console.error(error);
  }
}
