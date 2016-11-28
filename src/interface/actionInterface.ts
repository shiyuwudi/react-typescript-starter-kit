
export interface DispatchListLoadingInterface {
  (data: boolean): {
    type: string,
    data: boolean
  };
}