export const hide = (pageName) => {
	$(pageName).addClass("d-none")
}

export const show = (pageName) => {
	$(pageName).removeClass("d-none")
}

export const setValue = (input, value) => {
	$(input).val(value)
}

export const setLabel = (label, value) => {
	$(label).text(value)
}
