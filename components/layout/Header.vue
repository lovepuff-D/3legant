<script setup lang="ts">
</script>

<template>
    <div class="container">
        <header :class="[$style.header]">
            <div :class="$style.leftSide">
                <button :class="$style.menu">
                    <svg>
                        <use href="/svg-sprite/sprite.svg#burger-icon"/>
                    </svg>
                </button>
                <NuxtLink to="/" :class="$style.companyLogo">
                    <svg>
                        <use href="/svg-sprite/sprite.svg#company-logo"/>
                    </svg>
                </NuxtLink>
            </div>
            <nav :class="$style.navWrapper">
                <ul :class="$style.nav">
                    <li>
                        <NuxtLink
                            to="/"
                        >
                            Home
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            to="/shop"
                        >
                            Shop
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            to="/product"
                        >
                            Product
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            to="/contact-us"
                        >
                            Contact Us
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
            <div :class="$style.rightSide">
                <NuxtLink
                    to="/auth/sign-in"
                    :class="$style.svgBtn"
                >
                    <svg>
                        <use href="/svg-sprite/sprite.svg#account"/>
                    </svg>
                </NuxtLink>
                <!--TODO Вынести в компонент, эта штука используется в мобилке-->
                <button :class="[$style.svgBtn, $style.cartBtn]">
                    <svg>
                        <use href="/svg-sprite/sprite.svg#cart"/>
                    </svg>
                    <span :class="$style.cartQuantity">2</span>
                </button>
            </div>
        </header>
    </div>
</template>

<style module lang="scss">
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
    padding: 18px 0;

    & > * {
        flex: 1;
    }
}

.menu {
    svg {
        width: 24px;
        height: 24px;
    }
}

.companyLogo {
    margin-bottom: -4px;
    transition: opacity .3s;

    &:hover {
        opacity: .5;
    }

    svg {
        width: 105px;
        height: 24px;
    }
}

.leftSide {
    display: flex;
    justify-content: start;
}

.navWrapper {
    display: none;
}

.rightSide {
    display: flex;
    justify-content: right;
    gap: 16px;

    svg {
        width: 24px;
        height: 24px;
    }

}

.svgBtn {
    display: flex;

    svg {
        width: 24px;
        height: 24px;
        fill: white;
    }
}

.cartBtn {
    display: flex;
    align-items: center;
    gap: 5px;
}

.cartQuantity {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    background: $neutral-07;
    border-radius: 50%;
    color: $base;
    font-size: 12px;
    font-weight: 700;
}

@include respond-to(d) {
    .menu {
        display: none;
    }

    .navWrapper {
        display: flex;
        justify-content: center;
        flex: 1 0 auto;
    }

    .nav {
        display: flex;
        justify-content: center;
        gap: 40px;
        list-style: none;

        a {
            color: $neutral-04;
            transition: color $transition-duration;

            &:global(.router-link-active),
            &:hover {
                color: $neutral-07;
            }
        }
    }
}
</style>
