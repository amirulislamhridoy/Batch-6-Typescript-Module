const btn = document.getElementById('btn') as HTMLButtonElement
const input = document.getElementById('input') as HTMLInputElement

const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    const parent = target?.parentNode
    const p = document.createElement('p')
    p.innerText = input.value
    parent?.appendChild(p)
}

// btn?.addEventListener('click', (e) => handleClick)
btn?.addEventListener('click', handleClick)