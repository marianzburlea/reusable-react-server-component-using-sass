import { Button } from '@wowjob/atom'

const HomePage = () => {
  return (
    <main>
      <h1>Test</h1>

      <div>
        <Button>Default</Button>
      </div>

      <div>
        <Button color="blue">blue</Button>
      </div>

      <div>
        <Button color="green">green</Button>
      </div>

      <div>
        <Button color="red">red</Button>
      </div>
    </main>
  )
}

export default HomePage
