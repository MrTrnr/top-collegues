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

  nom: string;
  photo: string;
  prenom: string;
  pseudo: string;



};

export enum Avis{
    AIMER,
    DETESTER
};
