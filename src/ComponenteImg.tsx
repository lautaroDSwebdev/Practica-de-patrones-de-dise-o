
function CompImg(props) {
  let id = Date.now();
  console.log(props.state);
  return props.state?.message.map((e) => {
    const style = {height: "auto", width: "100px"}
    return (
    <div key={id} >
        <h1>Cachorros</h1>
        <img style={style} src={e} alt="fotos de perros" key={id} />;
    </div>
  )});


}
export default CompImg

