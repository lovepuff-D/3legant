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
                    <NuxtLink :class="$style.qwe">
                        Privacy Policy
                    </NuxtLink>
                    <NuxtLink :class="$style.qwe">
                        Terms of Use
                    </NuxtLink>
                </div>
                <div :class="$style.social"></div>
            </div>
        </div>
    </footer>
</template>

<style module lang="scss">
.wrapper {
    background: $neutral-07;
    color: $neutral-03;
}

.content {
    padding: 80px 0 32px;
}

.top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
}

.bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    border-top: 0.5px solid $neutral-04;
    font-size: 12px;
}

.copyright {
    display: flex;
    gap: 28px;
}

$company-info-gap: 32px;

.companyInfo {
    display: flex;
    gap: $company-info-gap;
    font-size: 14px;
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
    align-items: center;

    &::before {
        content: "";
        display: block;
        width: 1px;
        height: 100%;
        background: $neutral-04;
        margin-right: $company-info-gap;
    }
}

.nav {
    display: flex;
    justify-content: center;
    gap: 40px;
    list-style: none;

    a {
        color: $neutral-01;
        transition: color $transition-duration;

        &:hover {
            color: rgba($neutral-03, 0.6);
        }
    }
}

.qwe {
    color: $neutral-01;
    font-weight: 600;
}

.social {
    width: 45px;
    height: 24px;
    background: $neutral-03;
}

</style>
