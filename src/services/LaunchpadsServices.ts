import { type locationData } from "../types";

const BASE_URL = "https://api.spacexdata.com/v4";

export async function fetchLaunchpads(): Promise<locationData[]> {
    const res = await fetch(`${BASE_URL}/launchpads`);
    if (!res.ok) throw new Error(`Error recibiendo información de ubicaciones: ${res.status}`);
    return res.json();
}