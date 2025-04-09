<script
    setup
    lang="ts"
>
import VIcon from '~/components/ui/VIcon.vue';
import { EIconSize } from '~/@types/ui/icon';
import { throttle } from 'assets/helpers/common-utils';
import VModal from '~/components/ui/VModal.vue';
import CartModal from '~/components/modals/CartModal.vue';

const lastScrollPosition = ref(0);
const scrollMode = ref<'UP' | 'DOWN'>('UP');

onMounted(() => {
    lastScrollPosition.value = window.scrollY;

    window.addEventListener('scroll', throttle(100, () => {
        if (lastScrollPosition.value < window.scrollY) {
            scrollMode.value = 'DOWN'
        } else {
            scrollMode.value = 'UP'
        }
        lastScrollPosition.value = window.scrollY;
    }));
});

const isShowCartModal = ref(false);
</script>

<template>
    <header :class="[$style.header, $style[scrollMode === 'DOWN' ? '_scrollDown' : '_scrollUp']]">
        <div class="container">
            <div :class="$style.headerWrapper">
                <div :class="$style.leftSide">
                    <button :class="$style.menu">
                        <VIcon name="burger-menu"/>
                    </button>
                    <NuxtLink
                        to="/"
                        :class="$style.companyLogo"
                    >
                        <VIcon
                            name="company-logo"
                            :size="EIconSize.custom"
                        />
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
                        <VIcon name="user-circle"/>
                    </NuxtLink>
                    <!--TODO Вынести в компонент, эта штука используется в мобилке-->
                    <button
                        :class="[$style.svgBtn, $style.cartBtn]"
                        @click="isShowCartModal = !isShowCartModal"
                    >
                        <VIcon name="shopping-bag"/>
                        <span :class="$style.cartQuantity">2</span>
                    </button>
                </div>
            </div>
        </div>
        <VModal
            v-if="isShowCartModal"
            @close="isShowCartModal = false"
        >
            <CartModal/>
        </VModal>
    </header>
</template>

<style
    module
    lang="scss"
>
.header {
    position: fixed;
    inset: 0 0 auto;
    z-index: 100;
    background: $base;
    box-shadow: 0 -10px 15px 0 rgba($neutral-07, .5);
    transform: translateY(0);
    transition: transform $transition-duration;

    &._scrollDown {
        transform: translateY(-100%);
    }
}

.headerWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
    height: 60px;

    & > * {
        flex: 1;
    }

    svg:hover {
        color: $neutral-04;
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

        path:nth-child(2) {
            color: $neutral-04;
            stroke: $neutral-04;
        }
    }
}

.leftSide {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 4px;
}

.navWrapper {
    display: none;
}

.rightSide {
    display: flex;
    justify-content: right;
    gap: 16px;
}

.svgBtn {
    display: flex;
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
