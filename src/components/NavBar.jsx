import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-danger">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Project-1</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Add Student</a>
        <a class="nav-link" href="/search">Search</a>
        <a class="nav-link" href="/delete">Delete</a>
        <a class="nav-link" href="/viewall">View All</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar