import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import styles from "./styles/monev.module.css";
import {
  TABS,
  LIST_INSTRUMEN_TATA_KELOLA,
  LIST_INSTRUMEN_PENGUMPULAN_DATA,
  LIST_INSTRUMEN_PENGOLAHAN_DATA,
  LIST_INSTRUMEN_SUMBER_DAYA_MANUSIA,
  LIST_INSTRUMEN_INFRASTRUKTUR,
  LIST_JAWABAN_TIM_PDDIKTI,
} from "@/components/Container/Monev/constants";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { BuildingOfficeIcon } from "@heroicons/react/24/solid";

const CustomTabs = () => {
  return (
    <Tabs defaultValue={TABS[0].value} className="w-full mt-5">
      <div className={styles.tabs_wrapper}>
        <TabsList className={`${styles.tabs_list} bg-white space-x-16`}>
          {TABS.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={styles.tabs_trigger}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {TABS.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <ContentTableMonev tab={tab.value} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

const TitleContainer = () => {
  return (
    <Alert>
      <div className="flex items-center">
        <div>
          <BuildingOfficeIcon className="h-8 w-8" />
        </div>
        <div className="ml-3">
          <AlertTitle>Monev Pelaporan Data Semester 2022/2023 Genap</AlertTitle>
        </div>
      </div>
    </Alert>
  )
}

const ContentTableMonev = (tab) => {
  return (
    <Card>
      <CardContent>
        <Table className="mt-5">
          <TableCaption>
            Monev Pelaporan Data Semester 2022/2023 Genap
          </TableCaption>
          <HeaderTable />
          <BodyTable tab={tab.tab} />
        </Table>
      </CardContent>
    </Card>
  );
};

const HeaderTable = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead rowSpan={2} className="text-black bg-blue-100">
          No
        </TableHead>
        <TableHead rowSpan={2} className="text-black bg-blue-100 min-w-96">
          Penilaian
        </TableHead>
        <TableHead rowSpan={2} className="text-black bg-blue-100 min-w-96">
          Penjelasan
        </TableHead>
        <TableHead rowSpan={2} className="text-black bg-blue-100 min-w-96">
          Pilihan Jawaban
        </TableHead>
        <TableHead
          colSpan={4}
          className="text-black bg-blue-200 min-w-96 text-center"
        >
          Admin PT
        </TableHead>
        <TableHead
          colSpan={3}
          className="text-black bg-green-200 min-w-96 text-center"
        >
          Tim PDDikti
        </TableHead>
      </TableRow>
      <TableRow>
        <TableHead className="text-black bg-blue-100 min-w-96">
          Jawaban
        </TableHead>
        <TableHead className="text-black bg-blue-100 min-w-96">Nilai</TableHead>
        <TableHead className="text-black bg-blue-100 min-w-96">
          Dokumen Pendukung/Evidence
        </TableHead>
        <TableHead className="text-black bg-blue-100 min-w-96">
          Keterangan
        </TableHead>
        <TableHead className="text-black bg-green-100 min-w-96">
          Jawaban
        </TableHead>
        <TableHead className="text-black bg-green-100 min-w-96">
          Nilai
        </TableHead>
        <TableHead className="text-black bg-green-100 min-w-96">
          Keterangan
        </TableHead>
      </TableRow>
    </TableHeader>
  );
};

const AnswerCheckbox = ({ value }) => (
  <div className="items-center space-x-2 space-y-2 mb-2">
    <Checkbox name="jawaban" value={value} />
    <label
      htmlFor="jawaban"
      className="text-lg leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {value}
    </label>
  </div>
);

const FileInput = () => (
  <div className="w-full">
    <Input id="dokumen" type="file" name="dokumen" />
  </div>
);

const CustomTextarea = ({ placeholder }) => (
  <Textarea
    placeholder={placeholder}
    rows={5}
    className="h-[100px] w-full"
    style={{ padding: "10px" }}
  />
);

const SelectInput = () => (
  <Select>
    <SelectTrigger className="w-full">
      <SelectValue placeholder="Pilih Jawaban" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Jawaban</SelectLabel>
        {LIST_JAWABAN_TIM_PDDIKTI.map((jawaban) => (
          <SelectItem key={jawaban.id} value={jawaban.jawaban}>{jawaban.jawaban}</SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
);

const BodyTable = (tab) => {
  const valueTab = tab.tab;
  let list_instrumen = LIST_INSTRUMEN_TATA_KELOLA;
  switch (valueTab) {
    case "tata_kelola":
      list_instrumen = LIST_INSTRUMEN_TATA_KELOLA;
      break;
    case "pengumpulan_data":
      list_instrumen = LIST_INSTRUMEN_PENGUMPULAN_DATA;
      break;
    case "pengolahan_data":
      list_instrumen = LIST_INSTRUMEN_PENGOLAHAN_DATA;
      break;
    case "sumber_daya_manusia":
      list_instrumen = LIST_INSTRUMEN_SUMBER_DAYA_MANUSIA;
      break;
    case "infrastruktur":
      list_instrumen = LIST_INSTRUMEN_INFRASTRUKTUR;
      break;
    default:
      break;
  }

  return (
    <TableBody>
      {list_instrumen.map((item) => (
        <TableRow key={item.id}>
          <TableCell>{item.id}</TableCell>
          <TableCell>{item.penilaian}</TableCell>
          <TableCell>{item.penjelasan}</TableCell>
          <TableCell>
            <ol className={styles.alpha_list}>
              {item.opsi_jawaban.map((opsi) => (
                <li key={opsi}>{opsi}</li>
              ))}
            </ol>
          </TableCell>
          <TableCell>
            {item.jawaban.map((jawaban, index) => (
              <AnswerCheckbox key={index} value={jawaban} />
            ))}
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
            <FileInput />
          </TableCell>
          <TableCell>
            <CustomTextarea placeholder="Keterangan" />
          </TableCell>
          <TableCell>
            <SelectInput />
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
            <CustomTextarea placeholder="Keterangan" />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export { CustomTabs, TitleContainer };
