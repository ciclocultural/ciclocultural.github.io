console.log('cargando registro.js')

let form
const formToJSON = elements => [].reduce.call(elements, (data, element) => {
  if (isValidElement(element) && isValidValue(element)) {
    if (isCheckbox(element)) {
      data[element.name] = (data[element.name] || []).concat(element.value)
    } else if (isMultiSelect(element)) {
      data[element.name] = getSelectValues(element)
    } else {
      data[element.name] = element.value
    }
  }
  return data
}, {})

const getSelectValues = options => [].reduce.call(options, (values, option) => {
  return option.selected ? values.concat(option.value) : values
}, [])

const isValidElement = element => {
  return element.name && element.value
}

const isValidValue = element => {
  return (!['checkbox', 'radio'].includes(element.type) || element.checked);
}

const isCheckbox = element => element.type === 'checkbox'
const isMultiSelect = element => element.options && element.multiple

const handleFormSubmit = event => {
  document.getElementById('submit').disabled = true
  event.preventDefault()
  console.log(form.elements)
  const data = formToJSON(form.elements)
  console.log(data)
  axios.post('https://ciclocultural--uttopy.repl.co/registros/new', data)
    .then((response) => {
      console.log(response)
      window.location.replace('/gracias')
    })
    .catch((error) => {
      console.log(error)
    })
}

document.addEventListener('DOMContentLoaded', function () {
  form = document.getElementsByClassName('registro-form')[0]
  form.addEventListener('submit', handleFormSubmit)
})
