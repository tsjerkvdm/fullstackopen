export default function Total({ parts }) {
    console.log(parts)

    const total = parts.reduce((s, p) => s + p.exercises, 0)

    return (
        <div>
            <b>Total of {total} exercises</b>
        </div>
        )
}