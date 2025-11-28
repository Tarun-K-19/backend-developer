export interface Experience {
    role: string;
    company: string;
    location: Location;
    from: TimePeriod;
    to: TimePeriod | null;
    description: string;
    points: string[];
    techStack: string[];
}

export interface Location {
    city: string,
    state: string,
    country: string,
}

export interface TimePeriod {
    month: Month,
    year: number
}

export type Month =
    | "JAN" | "FEB" | "MAR" | "APR" | "MAY" | "JUN"
    | "JUL" | "AUG" | "SEP" | "OCT" | "NOV" | "DEC";