import colors from 'picocolors'
import prompts from 'prompts'

const { red } = colors

async function init() {
  const result = await prompts(
    [
      {
        type: 'text',
        name: 'meaning',
        initial: 'working',
        message: 'What is the meaning of life?',
      },
      {
        type: 'text',
        name: 'food',
        initial: 'pizza',
        message: 'What is your fond food?',
      },
    ],
    {
      onCancel: () => {
        throw new Error(`${red('✖')} Operation cancelled`)
      },
    },
  )

  const { meaning, food } = result

  console.log(meaning, food, '结果值')
}

init().catch(e => {
  console.error(e)
})
