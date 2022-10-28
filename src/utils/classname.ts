export const classname = (...args: any): string => {
  let classes = []
  for (let u = 0; u < args.length; u++) {
    const arg = args[u]
    if (!arg) continue
    let argType = typeof arg
    switch (argType) {
      case 'string':
      case 'number':
        classes.push(arg)
        break
      case 'object':
        for (const key in arg) {
          if (Object.prototype.hasOwnProperty.call(arg, key)) {
            const element = arg[key]
            if (element) {
              classes.push(key)
            }
          }
        }
        break

      default:
        console.log(arg)
        break
    }
  }

  return classes.join(' ')
}
