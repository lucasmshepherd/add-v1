//import styles from './container.module.sass'

export default function Container(props) {
  return (
    <div className="container">
      {props.children}
    </div>
  )
}