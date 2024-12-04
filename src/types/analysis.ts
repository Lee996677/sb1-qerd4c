export interface Analysis {
  id: number;
  patientName: string;
  species: string;
  type: string;
  date: string;
  status: 'Completed' | 'Processing' | 'Failed';
  confidence: number | null;
  imageUrl?: string;
  findings?: string[];
  veterinarian?: string;
}