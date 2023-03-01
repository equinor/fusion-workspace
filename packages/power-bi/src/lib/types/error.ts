export interface FusionPBIError {
  resourceIdentifierstring?: string;
  code: ContextErrorType;
  message: string;
}

export type ContextErrorType = 'NotAuthorizedReport' | 'NotAuthorized' | 'MissingContextRelation';
