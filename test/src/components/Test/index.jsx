import './index.scss'

export default class extends React.Component {
  test = evt => {
    // eslint-disable-next-line
    console.log(evt)
  }

  render = () => (
    <div className="btn">
      <div>测试</div>
    </div>
  )
}
