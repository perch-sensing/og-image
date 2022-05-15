export type FileType = 'png' | 'jpeg';

export interface ParsedRequest {
  fileType: FileType;
  text: string;
  date: string | undefined;
  partnerLogo: string | undefined;
}
