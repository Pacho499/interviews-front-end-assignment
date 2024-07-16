import { Cuisine, Diet, Difficulty } from "../types/apiResponse";

export function getAppConstants(
  constantId: string,
  constantArray: Difficulty[]
): string;

export function getAppConstants(
  constantId: string,
  constantArray: Diet[]
): string;
export function getAppConstants(
  constantId: string,
  constantArray: Cuisine[]
): string;

export function getAppConstants(
  constantId: string,
  constantArray: any
): string {
  return constantArray.filter((constant: any) => constant.id === constantId)[0]
    .name;
}
