/* Interfaces resposánveis por comunicação como banco de dados */

export interface FeedbackCreateData {
    type: string;
    comment: string;
    /* opcional */ 
    screenshot?: string;
}

export interface FeedbacksRepository {
    create: (data: FeedbackCreateData) => Promise<void>;
}