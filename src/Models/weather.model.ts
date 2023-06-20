import { current_info } from "./current.model";
import { hourly_units_1 } from "./hourly-units.model";
import {hourly_1 } from "./hourly.model";

export class weather
{
    latitude?: number;
    longitude?: number;
    elevation?: number;
    generationtime_ms?: number;
    utc_offset_seconds?: number;
    timezone?: string;
    timezone_abbreviation?: string;
    hourly?:hourly_1;
    hourly_units?:hourly_units_1;
    current_weather?: current_info;
}

