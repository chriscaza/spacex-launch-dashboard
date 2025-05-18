import { type launchesData } from "../types";

const BASE_URL = "https://api.spacexdata.com/v4";

export async function fetchLaunches(): Promise<launchesData[]> {
    const res = await fetch(`${BASE_URL}/launches`);
    if (!res.ok) throw new Error(`Error recibiendo informacion de lanzamientos: ${res.status}`);
    return res.json();
}

