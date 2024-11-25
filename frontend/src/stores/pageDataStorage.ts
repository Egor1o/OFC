import { deepMap } from 'nanostores';
export const $data = deepMap([])

export const setNewData = (page: string, language: string, callBack: (data) => void) => {
  $data.set([...$data.get(), {id : "1", description: "jou"}])
  console.log($data.get())
  // Here will be a fetch
  callBack($data.get())
};
