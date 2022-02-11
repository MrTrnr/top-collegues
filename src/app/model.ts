// interface Collegue
// pseudo
// score
// photoUrl

export interface Collegue {

    pseudo: string;
    score: number;
    photoUrl: string;
};

export interface BigCollegue {

    pseudo: string;
    nom: string;
    prenom: string;
    photoUrl: string;
};

export enum Avis{
    AIMER,
    DETESTER
};