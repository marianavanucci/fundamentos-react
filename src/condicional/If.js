/* <if test={exp}>
    <span></span>
</if> 
exp = expressao booleriana
<if test={aluno.nota >=7}>
    <span></span>
</if> 
*/

export default (props) => {
  if (props.test) {
    return props.children;
  } else {
    return false;
  }
};
