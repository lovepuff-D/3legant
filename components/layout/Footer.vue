<script setup lang="ts">

</script>

<template>
    <footer :class="$style.wrapper">
        <div :class="[$style.content, 'container']">
            <div :class="$style.top">
                <div :class="$style.companyInfo">
                    <div :class="$style.companyLogo">
                        <svg>
                            <use href="/svg-sprite/sprite.svg#company-logo"/>
                        </svg>
                    </div>
                    <div :class="$style.companyType">
                        Gift & Decoration Store
                    </div>
                </div>
                <nav>
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
            </div>
            <div :class="$style.bottom">
                <div :class="$style.copyright">
                    <span>Copyright © 2023 3legant. All rights reserved</span>
                    <div :class="$style.copyrightLinks">
                        <NuxtLink
                            to="/privacy-policy"
                            target="_blank"
                        >
                            Privacy Policy
                        </NuxtLink>
                        <NuxtLink
                            to="/term-of-use"
                            target="_blank"
                        >
                            Terms of Use
                        </NuxtLink>
                    </div>
                </div>
                <div :class="$style.social">
                    <NuxtLink
                        to="https://www.instagram.com/"
                        target="_blank"
                    >
                        <svg>
                            <use href="/svg-sprite/sprite.svg#instagram"/>
                        </svg>
                    </NuxtLink>
                    <NuxtLink
                        to="https://www.facebook.com/"
                        target="_blank"
                    >
                        <svg>
                            <use href="/svg-sprite/sprite.svg#facebook"/>
                        </svg>
                    </NuxtLink>
                    <NuxtLink
                        to="https://www.youtube.com/"
                        target="_blank"
                    >
                        <svg>
                            <use href="/svg-sprite/sprite.svg#youtube"/>
                        </svg>
                    </NuxtLink>

                </div>
            </div>
        </div>
    </footer>
</template>

<style module lang="scss">
.wrapper {
    background: $neutral-07;
    color: $neutral-03;
}

.wrapper a {
    color: $neutral-01;
    transition: opacity $transition-duration;

    &:hover {
        opacity: .6;
    }
}

.content {
    padding-top: 48px;
    padding-bottom: 48px;

    @include respond-to(d) {
        padding: 80px 0 32px;
    }
}

.top {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 40px;

    @include respond-to(d) {
        flex-direction: row;
        margin-bottom: 50px;
    }
}

$company-info-gap_m: 16px;
$company-info-gap_d: 32px;

.companyInfo {
    display: flex;
    flex-direction: column;
    gap: $company-info-gap_m;
    align-items: center;
    font-size: 14px;

    @include respond-to(d) {
        flex-direction: row;
        gap: $company-info-gap_d;
    }
}

.companyLogo {
    display: flex;
    justify-content: start;

    svg {
        width: 105px;
        height: 24px;
        stroke: white;
    }
}

.companyType {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $company-info-gap_m;

    &::before {
        content: "";
        display: block;
        width: 24px;
        height: 1px;
        background: $neutral-04;
    }

    @include respond-to(d) {
        flex-direction: row;
        gap: $company-info-gap_d;

        &::before {
            width: 1px;
            height: 24px;
        }
    }
}

.nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    list-style: none;

    @include respond-to(d) {
        height: 100%;
        flex-direction: row;
    }
}

.bottom {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding: 24px 0;
    border-top: 0.5px solid $neutral-04;
    font-size: 12px;

    @include respond-to(d) {
        flex-direction: row;
        padding: 16px 0;
    }
}

.copyright {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 28px;

    @include respond-to(d) {
        flex-direction: row;
    }
}

.copyrightLinks {
    display: flex;
    gap: 28px;
    order: -1;
    color: $neutral-01;
    font-weight: 600;

    @include respond-to(d) {
        order: 0;
    }
}

.social {
    display: flex;
    align-items: center;
    gap: 24px;
    order: -2;

    a {
        display: flex;
    }

    svg {
        width: 24px;
        height: 24px;
    }

    @include respond-to(d) {
        order: 0;
    }
}
</style>
