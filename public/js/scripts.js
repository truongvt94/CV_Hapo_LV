function ConfirmDelete(mess){
	if (window.confirm(mess)) {
		return true;
	}
	return false;
}

$("div.alert").delay(5000).slideUp();
