<script src="inc/js/jquery.min.js"></script>
<script src="inc/js/popper.js"></script>
<script src="inc/js/bootstrap.min.js"></script>
<script src="inc/js/mains.js"></script>
<script src="inc/js/functions.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<script src="//cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js"></script>
<script>
	$(document).ready(function() {
		mostrarRegistros();

		var table = $('#example').DataTable({
				responsive: true
			})
			.columns.adjust()
			.responsive.recalc();
	});
</script>
</body>

</html>