<template>

<div class="row">
        <nav class="navbar navbar-expand-md bg-primary">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="d-block d-sm-block d-md-none">
                        <img class="logo" src="icons/logoAhorcado.png" alt="Logo">
                    </div>
                <div class="collapse navbar-collapse" id="navbarsExample03">
                    <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                        <li class="nav-item">
                            <h2><a class="nav-link active" aria-current="page" href="#"> <font-awesome-icon icon="home" /> Home </a></h2>
                        </li>
                        <li class="nav-item">
                            <h2><a class="nav-link active" aria-current="page" href="#"> <font-awesome-icon icon="users" /> Sobre nosotros </a></h2>
                        </li>
                        <li class="nav-item">
                            <h2><a class="nav-link active" href="#"> <font-awesome-icon icon="envelope" /> Contacto </a></h2>
                        </li>
                    </ul>
                    <div class="d-none d-sm-none d-md-block">
                        <img class="logo" src="icons/logoAhorcado.png" alt="Logo">
                    </div>
                </div>
            </div>
        </nav>
</div>


</template>

<script>
export default {
  name: 'navBar'
}
</script>
