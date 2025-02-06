<script setup lang="ts">
const props = defineProps<{
    expire: string,
}>();

const parsedExpiresDate = computed(() => Date.parse(props.expire));
const getLeftTime = (endDate: number) => {
    const day = 24 * 60 * 60 * 1000;
    const hour = 60 * 60 * 1000;
    const minute = 60 * 1000;
    const second = 1000;

    // TODO endData постоянно парсится
    const left = endDate - Date.now();

    if (left < 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            isEnd: true,
        };
    }

    const leftDays = Math.floor(left / day);
    const leftHours = Math.floor(left % day / hour);
    const leftMinutes = Math.floor(left % hour / minute);
    const leftSeconds = Math.floor(left % minute / second);

    return {
        days: leftDays,
        hours: leftHours,
        minutes: leftMinutes,
        seconds: leftSeconds,
        isEnd: left < 0,
    };
};

type TLeftType = ReturnType<typeof getLeftTime>

const intervalId = ref<NodeJS.Timeout | null>(null);
const timeLeft = ref<TLeftType>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isEnd: true,
});

onMounted(() => {
    timeLeft.value = getLeftTime(parsedExpiresDate.value);

    if (!timeLeft.value.isEnd) {
        intervalId.value = setInterval(() => {
            const timer = getLeftTime(parsedExpiresDate.value);

            if (timer.isEnd && intervalId.value) {
                clearInterval(intervalId.value);
                intervalId.value = null;
            } else {
                timeLeft.value = timer;
            }
        }, 1000);
    }
});
</script>

<template>
    <ClientOnly>
        <div :class="$style.timerBlockWrapper">
            <div :class="$style.timerBlock">
                <div :class="$style.timerUnit">{{ timeLeft.days }}</div>
                <div :class="$style.timerBlockTitle">Days</div>
            </div>
            <div :class="$style.timerBlock">
                <div :class="$style.timerUnit">{{ timeLeft.hours }}</div>
                <div :class="$style.timerBlockTitle">Hours</div>
            </div>
            <div :class="$style.timerBlock">
                <div :class="$style.timerUnit">{{ timeLeft.minutes }}</div>
                <div :class="$style.timerBlockTitle">Minutes</div>
            </div>
            <div :class="$style.timerBlock">
                <div :class="$style.timerUnit">{{ timeLeft!.seconds }}</div>
                <div :class="$style.timerBlockTitle">Seconds</div>
            </div>
        </div>
    </ClientOnly>
</template>

<style module lang="scss">
.timerBlockWrapper {
    display: flex;
    gap: 16px;
    margin-top: 12px;
}

.timerBlock {
    text-align: center;
}

.timerUnit {
    overflow: hidden;
    width: 60px;
    height: 60px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
    padding: 8px;
    background: $neutral-02;
    @include heading(heading-5);
}

.timerBlockTitle {
    color: $neutral-04;
    @include text(caption-2);
}
</style>
