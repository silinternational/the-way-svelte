import phrases from './phrases.json'

export default function t(key) {
  const langOnlyNoVariant = navigator.language.substring(0,2)
  return phrases[key][langOnlyNoVariant || 'en']
}
