import { useEffect, useState } from "react";
const HocComponent = (ComponentHoc: React.ElementType , url: string) => {
  return (props: React.PropsWithChildren) => {
    const [state, setState] = useState(null);

    async function getData() {
      const req = await fetch(url);
      const res = await req.json();
      setState(res);
    }
    useEffect(() => {
      getData();
    }, []);
    return <ComponentHoc  {...props} state={state} />;
  };
};
export default HocComponent;
