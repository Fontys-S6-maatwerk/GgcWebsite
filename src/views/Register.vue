<template>
    <body class="register">
        <main class="pt-80">
            <div class="back-to-top background-highlight text-white display-none border-radius box-shadow small-text transition position-fixed p-15">
                <i class="fas fa-arrow-up icon"></i>
            </div>
            <div class="row">
                <div class="col-xl-6 content-wrapper flex align-center justify-center background-offwhite">
                    <div class="register-form p-md-20">
                        <h1 class="h2 mb-10">Welkom bij Global Goals Community</h1>
                        <p class="mb-50 display-none-xs">Om oplossingen te kunnen plaatsen, reageren op oplossingen om een eigen profiel te creëren moet er ingelogd zijn met een account.</p>
                        <p class="mb-30">Heb je al een account? <router-link to="/login/" class="bold-text text-highlight">Login</router-link></p>
                        <form id="register-form">
                            <div class="row mb-30">
                                <div class="col-6">
                                    <div class="input-wrapper">
                                        <label class="mb-10 bold-text" for="firstname">Voornaam</label>
                                        <input type="text" id="firstname" name="firstname" class="input py-10 px-20">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-wrapper">
                                        <label class="mb-10 bold-text" for="lastName">Achternaam</label>
                                        <input type="text" id="lastname" name="lastname" class="input py-10 px-20">
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-30">
                                <div class="col-12">
                                    <div class="input-wrapper">
                                        <label class="mb-10 bold-text" for="email">Emailadres</label>
                                        <input type="email" id="email" name="email" class="input py-10 px-20">
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-40">
                                <div class="col-6">
                                    <div class="input-wrapper">
                                        <label class="mb-10 bold-text" for="password">Wachtwoord</label>
                                        <input type="password" id="password" name="password" class="input py-10 px-20">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-wrapper">
                                        <label class="mb-10 bold-text" for="passwordRepeat">Herhaal wachtwoord</label>
                                        <input type="password" id="passwordRepeat" name="passwordRepeat" class="input py-10 px-20">
                                    </div>
                                </div>
                            </div>
                            <div class="form-options mb-30">
                                <label class="checkbox-wrapper mb-20">
                                    Ja, ik wil de nieuwsbrief ontvangen
                                    <input type="checkbox" id="newsletter" name="newsletter">
                                    <span class="checkbox"></span>
                                </label>
                                <label class="checkbox-wrapper mb-20">
                                    Ik accepteer de algemene voorwaarden en de privacy policy
                                    <input type="checkbox" id="acceptTerms" name="acceptTerms">
                                    <span class="checkbox"></span>
                                </label>
                            </div>
                            <div class="buttons">
                                <button class="btn btn-primary" type="submit">Maak een account aan</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-xl-6 image-wrapper flex align-center justify-center background-highlight display-none-lg">
                    <img class="image" src="../assets/images/login/register.png">
                </div>
            </div>
        </main>
    </body>
</template>
