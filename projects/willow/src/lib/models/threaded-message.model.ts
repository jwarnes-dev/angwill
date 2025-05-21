export interface ThreadedMessage {
    name: string;
    date: string; 
    text: string;
    isRepresentative: boolean;
    correspondence: string;
    attachments?: Array<{
      name: string;
      url: string;
    }>;
  }