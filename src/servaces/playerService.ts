export interface Playerobject {
    id: number;
    name: string;
    wins: number;
    losses: number
    totalScore: number;
}

const players: Playerobject[] = [
    {id: 1,
    name: "ShadowStrike",
    wins: 15,
    losses: 5, 
    totalScore: 28500},

    {id: 2,
    name: "NoobMaster",
    wins: 3,
    losses: 12, 
    totalScore: 4200},

    {id: 3,
    name: "Progamer99",
    wins: 0,
    losses: 0, 
    totalScore: 0}

];

export function countPlayers(arr: Playerobject[]): number {
    return arr.length
};

