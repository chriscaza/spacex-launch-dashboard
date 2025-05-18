import { type rocketData } from "../types";

const BASE_URL = "https://api.spacexdata.com/v4";

export async function fetchRockets(): Promise<rocketData[]> {
    const res = await fetch(`${BASE_URL}/rockets`);
    if (!res.ok) throw new Error(`Error recibiendo información de cohetes: ${res.status}`);
    return res.json();
}