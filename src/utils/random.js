export default function random(min, max) {
    return Math.round(min + Math.random() * (max - min));
}