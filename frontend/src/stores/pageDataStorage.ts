import { deepMap } from 'nanostores';
export const $data = deepMap({})

export const setNewData = (page: string, language: string, callBack: () => void) => {
  $data.set({...$data.get(), "mock" : "mock"})
  console.log($data.get())
  callBack()
};
