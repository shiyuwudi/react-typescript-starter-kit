
export interface dispatchListLoadingInterface {
  (data: boolean): {
    type: string,
    data: boolean
  };
}