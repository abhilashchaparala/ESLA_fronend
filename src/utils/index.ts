export const isAuth = () => sessionStorage.getItem("py-o2")!;

export interface Message {
  user: boolean;
  text: string;
}

export const setAuth = (name: string) => localStorage.setItem("py-o2", name);
