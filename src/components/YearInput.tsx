import { useTranslation } from "react-i18next"

export const YearInput = ({
    year,
    onChange
}: {
    year: string,
    onChange: (value: string) => void
}) => {
    const { t } = useTranslation()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        if (!value) {
            onChange(value)
            return
        }
        const parsedValue = parseInt(value)
        if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 3000) {
            onChange(value)
        }
    }

    return (
        <div>
            <label
                htmlFor="yearInput"
                className="mb-2 block">
                {t("home.yearLabel")}
            </label>
            <input
                type="text"
                id="yearInput"
                value={year}
                onChange={handleChange}
                placeholder={new Date().getFullYear().toString()}
                className="w-full focus:outline-none px-3 py-2 rounded font-bold text-5xl"
                autoComplete="off"
            />
        </div>
    )
}
