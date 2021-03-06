@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/brands.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Brands
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Brands','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/brands', 'Insert Brands']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-brands', 'col' => 'col-lg-12'))
        @endcomponent

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'table-brands', 'col' => 'col-lg-12'))
        @endcomponent

    </div>
</div>

@stop